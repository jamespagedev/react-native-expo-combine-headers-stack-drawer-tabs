import { users } from "@app/data";
import { sleep } from "@app/utils";
import { ApiResponseGetCurrentUser, ApiResponsePostLogin } from "@app/types";

export async function fakeApiGetCurrentUser(
  token: string
): Promise<ApiResponseGetCurrentUser | null> {
  try {
    await sleep(2000);
    const user = users.find((user) => user.token === token);
    if (!user) return null;
    const result = {
      id: user.id,
      displayName: user.displayName,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function fakeApiPostLogin(
  username: string,
  password: string
): Promise<ApiResponsePostLogin | null> {
  try {
    await sleep(2000);
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (!user) return null;
    const result = {
      id: user.id,
      token: user.token,
      displayName: user.displayName,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
}
