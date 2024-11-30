class BaseError extends Error{
  status
  error
  constructor(message , status , error){
   super(message)
   this.status = status
   this.error = error
  }
  
  static BadRequest(message = "bad request" , error = this){
    return new BaseError(message ,400 , error)
  }
}


module.exports = BaseError