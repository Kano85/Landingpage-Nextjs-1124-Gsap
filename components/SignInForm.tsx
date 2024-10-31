// // components/SignInForm.tsx
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';

// const signInSchema = z.object({
//   email: z.string().email(),
//   password: z.string().min(6),
// });

// type SignInFormData = z.infer<typeof signInSchema>;

// const SignInForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<SignInFormData>({
//     resolver: zodResolver(signInSchema),
//   });

//   const onSubmit = (data: SignInFormData) => {
//     console.log(data);
//     // Handle sign-in logic
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//       <div>
//         <label className="block text-sm font-medium">Email</label>
//         <input
//           type="email"
//           {...register('email')}
//           className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//         />
//         {errors.email && (
//           <p className="text-red-500 text-sm">{errors.email.message}</p>
//         )}
//       </div>
//       <div>
//         <label className="block text-sm font-medium">Password</label>
//         <input
//           type="password"
//           {...register('password')}
//           className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//         />
//         {errors.password && (
//           <p className="text-red-500 text-sm">{errors.password.message}</p>
//         )}
//       </div>
//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white p-2 rounded"
//       >
//         Sign In
//       </button>
//     </form>
//   );
// };

// export default SignInForm;
