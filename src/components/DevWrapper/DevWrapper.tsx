import styles from '@/components/DevWrapper/DevWrapper.module.css';
import { ReactNode } from 'react';

export interface DevWrapperProps {
  /**
   * The content to be wrapped and centered
   */
  children: ReactNode;

  /**
   * Whether the development wrapper is enabled
   * @default true
   */
  enabled?: boolean;

  /**
   * Optional title displayed above the component
   */
  title?: string;

  /**
   * Maximum width of the wrapper container
   * sm: 640px
   * md: 768px
   * lg: 1024px
   * xl: 1280px
   * xxl: 1536px
   * full: 100%
   * @default 'xl'
   */
}

function DevWrapper({ children, enabled = true, title }: DevWrapperProps) {
  if (!enabled) return children;

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        {title && <div className={styles.title}>{title}</div>}
        {children}
      </div>
    </main>
  );
}

export default DevWrapper;
