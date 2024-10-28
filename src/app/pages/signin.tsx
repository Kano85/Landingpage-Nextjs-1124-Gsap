// pages/signin.tsx
import SignInForm from '../components/SignInForm';

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
