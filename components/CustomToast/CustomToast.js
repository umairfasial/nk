import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {APP_STATE} from '../../redux/reducers/AppLoader/getState';
import {showMessage} from 'react-native-flash-message';
export const CustomToast = () => {
  const toast = useSelector(APP_STATE.toast);

  useEffect(() => {
    if (!toast || !toast.showToast) return;
    else {
      return showMessage({
        message: toast.title,
        description: toast.description,
        type: toast.status,
        duration: 1500,
      });
    }
  }, [toast]);

  return <></>;
};
