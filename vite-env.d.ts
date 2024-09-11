/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SECRET_KEY: string;
    readonly VITE_CLIENT_ID: string;
    readonly VITE_ADDRESS: string;
    // add more env variables as needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  