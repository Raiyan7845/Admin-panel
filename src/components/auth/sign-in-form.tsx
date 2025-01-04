'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Eye as EyeIcon } from '@phosphor-icons/react/dist/ssr/Eye';
import { EyeSlash as EyeSlashIcon } from '@phosphor-icons/react/dist/ssr/EyeSlash';
import { Controller, useForm } from 'react-hook-form';
import { z as zod } from 'zod';

import { paths } from '@/paths';
import { authClient } from '@/lib/auth/client';
import { useUser } from '@/hooks/use-user';
import { textAlign } from '@mui/system';
import { users } from './user';
const schema = zod.object({
  email: zod.string().min(1, { message: 'Email is required' }).email(),
  password: zod.string().min(1, { message: 'Password is required' }),
});

type Values = zod.infer<typeof schema>;

const defaultValues = { email: 'sofia@devias.io', password: 'Secret1' } satisfies Values;

export function SignInForm(): React.JSX.Element {
  const router = useRouter();

  const { checkSession } = useUser();

  const [showPassword, setShowPassword] = React.useState<boolean>();

  const [isPending, setIsPending] = React.useState<boolean>(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Values>({ defaultValues, resolver: zodResolver(schema) });

  // const onSubmit = React.useCallback(
  //   async (values: Values): Promise<void> => {
  //     setIsPending(true);

  //     const { error } = await authClient.signInWithPassword(values);

  //     if (error) {
  //       setError('root', { type: 'server', message: error });
  //       setIsPending(false);
  //       return;
  //     }

  //     // Refresh the auth state
  //     await checkSession?.();

  //     // UserProvider, for this case, will not refresh the router
  //     // After refresh, GuestGuard will handle the redirect
  //     router.refresh();
  //   },
  //   [checkSession, router, setError]
  // );

  const onSubmit = React.useCallback(
    async (values: Values): Promise<void> => {
      setIsPending(true);
  
      // ✅ Check if user exists in users.ts data
      const isValidUser = Object.values(users).some(userGroup =>
        userGroup.some(user => user.email === values.email && user.password === values.password)
      );
  
      console.log('isValidUser', isValidUser);
  
      if (!isValidUser) {
        setError('root', { type: 'server', message: 'Invalid email or password' });
        setIsPending(false);
        return;
      }
  
      console.log("Login successful!");
  
      // ✅ If no backend authentication is needed, store session manually
      localStorage.setItem("isAuthenticated", "true");
  
      // 🔴 If authClient is not needed, remove this block
      try {
        console.log("Sending credentials to authClient:", values);
        const { error } = await authClient.signInWithPassword(values);
  
        if (error) {
          console.error("Auth error:", error);
          setError('root', { type: 'server', message: error.message || 'Invalid credentials' });
          setIsPending(false);
          return;
        }
      } catch (err) {
        console.error("Auth request failed:", err);
        setError('root', { type: 'server', message: 'Authentication service error' });
        setIsPending(false);
        return;
      }
  
      console.log("Checking session...");
      await checkSession?.();
      console.log("Session check complete!");
  
      // ✅ Navigate after successful login
      router.push("/dashboard");
    },
    [checkSession, router, setError]
  );  
  
  
  return (
    <Stack spacing={4}>
      <Stack spacing={1}>
        <Typography variant="h4" sx={{textAlign:`center`}}>Login Page</Typography>
      </Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <FormControl error={Boolean(errors.email)}>
                <InputLabel>Email address</InputLabel>
                <OutlinedInput {...field} label="Email address" type="email" />
                {errors.email ? <FormHelperText>{errors.email.message}</FormHelperText> : null}
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <FormControl error={Boolean(errors.password)}>
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                  {...field}
                  endAdornment={
                    showPassword ? (
                      <EyeIcon
                        cursor="pointer"
                        fontSize="var(--icon-fontSize-md)"
                        onClick={(): void => {
                          setShowPassword(false);
                        }}
                      />
                    ) : (
                      <EyeSlashIcon
                        cursor="pointer"
                        fontSize="var(--icon-fontSize-md)"
                        onClick={(): void => {
                          setShowPassword(true);
                        }}
                      />
                    )
                  }
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                />
                {errors.password ? <FormHelperText>{errors.password.message}</FormHelperText> : null}
              </FormControl>
            )}
          />
          {errors.root ? <Alert color="error">{errors.root.message}</Alert> : null}
          <Button disabled={isPending} type="submit" variant="contained">
            Login
          </Button>
        </Stack>
      </form> 
    </Stack>
  );
}
