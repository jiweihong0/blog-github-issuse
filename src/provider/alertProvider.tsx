import React, { createContext, useMemo, useState } from 'react';

export type AlertType = 'success' | 'error' | 'info';

export type AlertProvierValue = {
  isShow: boolean
  message: string
  description: string
  type: AlertType
  show: (newMessage: string, newDescription: string, newType: AlertType) => void
  hide: () => void
};

const inistialState: AlertProvierValue = {
  isShow: false,
  message: '',
  description: '',
  type: 'info',
  show: () => { },
  hide: () => { },
};
export const AlertContext = createContext<AlertProvierValue>({ ...inistialState });

export default function AlertProvider({ children }: { children: React.ReactNode }) {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [type, setType] = useState<AlertType>('info');

  const value: AlertProvierValue = useMemo(() => ({
    isShow,
    message,
    description,
    type,
    show: (newMessage: string, newDescription: string, newType: AlertType) => {
      setMessage(newMessage);
      setDescription(newDescription);
      setType(newType);
      setIsShow(true);

      setTimeout(() => {
        setIsShow(false);
      }, 3000);
    },
    hide: () => {
      setIsShow(false);
    },
  }), [isShow, message, description, type]);

  return (
    <AlertContext.Provider value={value}>
      {children}
    </AlertContext.Provider>
  );
}