import type {RequestHandler} from "@sveltejs/kit"


// TODO: Persist in database
let todos: Todo[] = [];
 
export const GET: RequestHandler = () => {
    return {
        status: 200,
        body: todos
    }
}

export const POST = async ({request}) => {
    const response = await request.formData(); // or request.json(), etc
    
    todos.push({
        created_at: new Date(),
        done: false,
        text: response.get("text")
    }
    )
    console.log("todos", todos);

      return {
        status: 303,
        headers: {
            location: "/"
          }
    }

}


/*
export const POST: RequestHandler<{}, FormData> = async ({request}) => {
    console.log(request.body.)
    console.log(request.body.get("text"));
  
    return {
          status: 200,
          body: request.body.get("text")
      }
}
 */


