declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    PORT:number;
    PUBLIC_URL: string;
    OPEN_WEATHER_KEY: string;
  }
}
