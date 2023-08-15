import { useMutation } from '@tanstack/react-query';
import { useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '~/hooks/store';
import { authService } from '~/services/auth/auth.service';
import { setProfile } from '~/stores/auth.slice';

const RejectedGuard = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.auth.profile);

  useLayoutEffect(() => {
    if (!profile && authService.isAuthenticated()) {
      getProfile();
    }
  }, [dispatch]);

  const { mutate: getProfile } = useMutation(() => authService.profile(), {
    onSuccess: (res) => dispatch(setProfile(res)),
    onError: () => dispatch(setProfile(null))
  });

  return (
    <div className='r-rejected'>
      <Outlet />
    </div>
  );
};

export default RejectedGuard;
