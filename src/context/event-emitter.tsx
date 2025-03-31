/*
 * @Author: dushuai
 * @Date: 2025-03-12 17:25:27
 * @LastEditors: dushuai
 * @LastEditTime: 2025-03-12 18:02:51
 * @description: EventEmitterContext
 */
import { createContext, useContext } from 'use-context-selector';
import { EventEmitter } from 'turboutils';

const EventEmitterContext = createContext({
  eventEmitter: EventEmitter
});

export const useEventEmitterContextContext = () => useContext(EventEmitterContext);

export function EventEmitterContextProvider({ children }: Common.Children) {
  return (
    <EventEmitterContext.Provider
      value={{
        eventEmitter: EventEmitter
      }}
    >
      {children}
    </EventEmitterContext.Provider>
  );
}

export const useEventEmitter = () => useContext(EventEmitterContext);

export default EventEmitterContext;
