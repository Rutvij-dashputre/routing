import { useRouter } from "next/router"



//catch all routes :- 
function Doc() {
    const router = useRouter()
    const { params = []} = router.query
    console.log(params);
    return <h1> Docs Home Page</h1>
}

export default Doc