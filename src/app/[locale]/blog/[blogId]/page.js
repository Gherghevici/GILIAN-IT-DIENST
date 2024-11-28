export default function BlogId({params}){
   
    async function idFunc(){
        const {blogId} = await params;
        return blogId
      }
    const id = idFunc()
    return(
        <main className="py-20">
            {id}
        </main>
    )
}