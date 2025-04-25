// hooks/useTopBarLogic.ts
import { useState, useEffect, useMemo } from 'react';

// Định nghĩa kiểu cho state
interface TopBarState {
  currentTime: string;
  isConnected: boolean;
  isLoaded: boolean;
}

// Custom Hook cho TopBar Logic
export const useTopBarLogic = () => {
  // State Management với định nghĩa type cụ thể
  const [state, setState] = useState<TopBarState>({
    currentTime: '',
    isConnected: true,
    isLoaded: false
  });

  // Memoized Computed Values
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  // Language Configuration
  const languageConfigs = useMemo(() => [
    { language: '中文', href: '#', code: 'ZH' },
    { language: 'English', href: '#', isActive: true, code: 'EN' }
  ], []);

  // Hàm update time
  const updateTime = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    setState(prev => ({ ...prev, currentTime: timeString }));
  };

  // Hàm kiểm tra kết nối
  const checkConnectionStatus = () => {
    setState(prev => ({
      ...prev,
      isConnected: Math.random() > 0.1
    }));
  };

  // Effect quản lý các interval và animation
  useEffect(() => {
    // Initial setup
    updateTime();

    // Time interval
    const timeInterval = setInterval(updateTime, 1000);

    // Connection status simulation
    const statusCheck = setInterval(checkConnectionStatus, 10000);

    // Loaded state animation
    const loadTimer = setTimeout(() => {
      setState(prev => ({ ...prev, isLoaded: true }));
    }, 300);

    // Cleanup
    return () => {
      clearInterval(timeInterval);
      clearInterval(statusCheck);
      clearTimeout(loadTimer);
    };
  }, []);

  // Hàm thủ công để reset connection
  const resetConnection = () => {
    setState(prev => ({ ...prev, isConnected: true }));
  };

  // Trả về toàn bộ state và các method
  return {
    ...state,
    currentYear,
    languageConfigs,
    resetConnection
  };
};
