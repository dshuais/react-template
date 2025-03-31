/*
 * @Author: dushuai
 * @Date: 2025-03-12 18:05:06
 * @LastEditors: dushuai
 * @LastEditTime: 2025-03-12 18:21:00
 * @description: ModalContext
 */
import { useSetState } from 'ahooks';
import { Modal } from 'antd';
import { createContext, useContext } from 'use-context-selector';

type State = {
    visible: boolean
}

type Update = State | Partial<State> |((state: State) => State | Partial<State>);

const ModalContext = createContext<{
    setModal:(arg: Update) => void
      }>({
        setModal: () => ({})
      });

export function ModalContextProvider({ children }: Common.Children) {

  const [state, setState] = useSetState<State>({
    visible: false
  });

  return (
    <ModalContext.Provider
      value={{
        setModal: setState as (arg: Update) => void
      }}
    >
      {children}

      <Modal open={state.visible} onCancel={() => setState({ visible: false })}>
        1111
      </Modal>
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
export const useModalContext = () => useContext(ModalContext);

export default ModalContext;
