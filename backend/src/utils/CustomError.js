export class CustomError extends Error {
  constructor(message, code) {
    super(message)
    this.code = code
  }
}

export class AuthError extends CustomError {
  constructor(message = "Unauthorized access", code = 401) {
    super(message, code)
  }
}

export class ServerError extends CustomError {
  constructor(message = "Something went wrong", code = 500) {
    super(message, code)
  }
}
