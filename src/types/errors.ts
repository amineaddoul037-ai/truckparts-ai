export class TruckPartsError extends Error {
  constructor(
    public code: string,
    message: string,
    public statusCode: number = 500
  ) {
    super(message);
    this.name = 'TruckPartsError';
  }
}

export class NotFoundError extends TruckPartsError {
  constructor(resource: string, id?: string) {
    const message = id ? `${resource} with ID ${id} not found` : `${resource} not found`;
    super('NOT_FOUND', message, 404);
  }
}

export class ValidationError extends TruckPartsError {
  constructor(message: string) {
    super('VALIDATION_ERROR', message, 400);
  }
}

export class UnauthorizedError extends TruckPartsError {
  constructor(message: string = 'Unauthorized') {
    super('UNAUTHORIZED', message, 401);
  }
}

export class ForbiddenError extends TruckPartsError {
  constructor(message: string = 'Forbidden') {
    super('FORBIDDEN', message, 403);
  }
}

export class ConflictError extends TruckPartsError {
  constructor(message: string) {
    super('CONFLICT', message, 409);
  }
}

export class RateLimitError extends TruckPartsError {
  constructor(message: string = 'Rate limit exceeded') {
    super('RATE_LIMIT', message, 429);
  }
}

export class InternalServerError extends TruckPartsError {
  constructor(message: string = 'Internal server error') {
    super('INTERNAL_SERVER_ERROR', message, 500);
  }
}
