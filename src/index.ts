// sum numbers
export const sum = (num1: number, num2: number) => {
  return num1 + num2;
};

// reduce numbers
export const reduce = (num: number) => {
  return num - 1;
};

// validating object
interface Car {
  name: string;
  doors: number;
}

export const myCar: Car = {
  doors: 2,
  name: "Tesla Model S",
};

// promise testing
interface GetMyNameResponse {
  error?: string;
  name?: string;
}

export const getMyName = (name: string): Promise<GetMyNameResponse> => {
  return new Promise((resolve, reject) => {
    if (name === "vinicius") {
      resolve({
        name,
      });
    } else {
      reject({
        error: "Failed to get my name!",
      });
    }
  });
};

// Testing truthy values

const infos = [
  "I am 24 YO",
  "I live in Brasil",
  "I Love music",
  "Tech is my thing. I try at least...",
];

export const checkGivenInfo = (info: string): boolean => {
  if (infos.includes(info)) return true;
  return false;
};
