import UserModel from "../Model/UserModel";
import { Request, Response } from "express";

// post
export const register = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password, fullName } = req.body;
    const createUser = await UserModel.create(
      {
        email,
        fullName,
        password,
      },
    );
    return res.status(200).json({
      status: "success",
      data: createUser,
    });
  } catch (error) {
    return res.status(401).json({
      status: "failed",
      error: error,
    });
  }
};

// Authentication
export const Login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email } = req.body;
    if (!email) {
      console.log("Please Enter An email");
    }
    const findUser = await UserModel.findOne({ email });
    return res.status(200).json({
      status: "success",
      data: findUser,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      error: error,
    });
  }
};


// get all
export const getAll = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const getAll = await UserModel.find();
    return res.status(200).json({
      status: `${getAll.length} Users`,
      data: getAll,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      error: error,
    });
  }
};