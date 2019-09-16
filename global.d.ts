declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    PORT:number;
    OPEN_WEATHER_KEY: string;
  }
}
