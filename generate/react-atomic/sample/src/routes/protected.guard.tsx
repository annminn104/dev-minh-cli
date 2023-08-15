import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '~/hooks/store';
import { authService } from '~/services/auth/auth.service';
import { setProfile } from '~/stores/auth.slice';

const ProtectedGuard = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.auth.profile);

  const { mutate: getProfile, isLoading } = useMutation(() => authService.profile(), {
    onSuccess: (res) => dispatch(setProfile(res)),
    onError: () => dispatch(setProfile(null))
  });

  useEffect(() => {
    if (!profile && authService.isAuthenticated()) {
      getProfile();
    }
  }, [dispatch]);

  if (!profile && !authService.isAuthenticated() && !isLoading) {
    return <Navigate to='/' replace />;
  }

  return (
    <div className='r-protected'>
      <Outlet />
    </div>
  );
};

export default ProtectedGuard;
