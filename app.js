// app.js
import {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithGoogle,
  createMember,
} from './firebase.js';

// DOM Elements
const registrationForm = document.getElementById('registrationForm');
const googleSignIn = document.getElementById('googleSignIn');
const toggleLogin = document.getElementById('toggleLogin');
const submitButton = document.getElementById('submitButton');
const referralSource = document.getElementById('referralSource');
const otherSourceField = document.getElementById('otherSourceField');

// Show/hide other source field
referralSource.addEventListener('change', function () {
  if (this.value === 'Other') {
    otherSourceField.classList.remove('hidden');
  } else {
    otherSourceField.classList.add('hidden');
  }
});

// Show alert function
function showAlert(message, type = 'success') {
  const alertContainer = document.getElementById('alertContainer');
  const alert = document.createElement('div');
  alert.className = `fixed top-4 right-4 p-4 rounded-lg text-white font-medium ${
    type === 'success' ? 'bg-green-500' : 'bg-red-500'
  }`;
  alert.textContent = message;
  alertContainer.appendChild(alert);

  setTimeout(() => {
    alert.remove();
  }, 4000);
}

// Set loading state
function setLoading(isLoading) {
  submitButton.disabled = isLoading;
  googleSignIn.disabled = isLoading;
  submitButton.textContent = isLoading ? 'Creating Account...' : 'Become a Member';
  googleSignIn.innerHTML = isLoading
    ? '<i class="fas fa-spinner fa-spin"></i><span>Signing in...</span>'
    : '<i class="fab fa-google text-red-500"></i><span>Continue with Google</span>';
}

// Form Submission
registrationForm.addEventListener('submit', async e => {
  e.preventDefault();

  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const specialty = document.getElementById('specialty').value;
  const referralSourceValue = document.getElementById('referralSource').value;
  const otherSourceValue = document.getElementById('otherSource').value;
  const password = document.getElementById('password').value;

  const finalReferralSource =
    referralSourceValue === 'Other' ? otherSourceValue : referralSourceValue;

  if (!fullName || !email || !phone || !specialty || !referralSourceValue || !password) {
    showAlert('Please fill in all required fields', 'error');
    return;
  }

  if (password.length < 6) {
    showAlert('Password must be at least 6 characters', 'error');
    return;
  }

  setLoading(true);

  try {
    // Create user account
    const userCredential = await createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Store member data
    await createMember(user.uid, {
      fullName,
      email,
      phone,
      specialty,
      referralSource: finalReferralSource,
    });

    showAlert('Account created successfully! Welcome to The Great Debaters!');
    registrationForm.reset();
    otherSourceField.classList.add('hidden');
  } catch (error) {
    console.error('Registration error:', error);
    let errorMessage = 'An error occurred during registration';

    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage = 'This email is already registered';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Invalid email address';
        break;
      case 'auth/weak-password':
        errorMessage = 'Password should be at least 6 characters';
        break;
    }

    showAlert(errorMessage, 'error');
  } finally {
    setLoading(false);
  }
});

// Google Sign In
googleSignIn.addEventListener('click', async () => {
  try {
    setLoading(true);
    const result = await signInWithGoogle();
    const user = result.user;

    // Check if member exists, if not create one
    const memberDoc = await db.collection('members').doc(user.uid).get();
    if (!memberDoc.exists) {
      await createMember(user.uid, {
        fullName: user.displayName || 'Not provided',
        email: user.email,
        phone: 'Not provided',
        specialty: 'Not specified',
        referralSource: 'Google Sign-In',
        isGoogleUser: true,
      });
      showAlert('Account created successfully! Please complete your profile.');
    } else {
      showAlert('Successfully signed in!');
    }
  } catch (error) {
    console.error('Google sign in error:', error);
    showAlert('Failed to sign in with Google', 'error');
  } finally {
    setLoading(false);
  }
});

// Toggle login (placeholder)
toggleLogin.addEventListener('click', () => {
  showAlert('Login functionality coming soon!', 'error');
});

// Auth state listener
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('User signed in:', user.email);
  } else {
    console.log('User signed out');
  }
});
