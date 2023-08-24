export type ValueObjectExceptionType = {
  property: string;
  message: string;
};

export class DomainException extends Error {
  readonly details?: ValueObjectExceptionType | ValueObjectExceptionType[];

  constructor(
    message: string,
    details?: ValueObjectExceptionType | ValueObjectExceptionType[],
  ) {
    super(message);
    if (details) this.details = details;
  }
}
