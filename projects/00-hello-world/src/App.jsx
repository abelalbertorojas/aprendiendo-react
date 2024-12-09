import './App.css'
import { FollowCard } from './FollowCard'

export function App ()
{
    return (
        <>
            <FollowCard usuario="abelalbertorojas">
                Abel Rojas
            </FollowCard>

            <FollowCard usuario="ivanleonardorojas" >
                Ivan Leonardo Rojas
            </FollowCard>

            <FollowCard usuario="Pana" >
                Oye Panna
            </FollowCard>
        </>  
    )
}