import express from "express";

declare module "express" {
  export interface Request extends express.Request {
    session?: {
      id: string;
      userId: string;
      isAdmin: boolean;
    };
  }
}
