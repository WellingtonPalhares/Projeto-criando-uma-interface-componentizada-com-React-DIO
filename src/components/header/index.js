import React, { useState } from 'react'
import * as S from './styled'
import useGithub from "../../hooks/github-hooks"

const Header = () => {
    const { getUser } = useGithub();
    const [usernameForSearch, setupUsernameForSearch] = useState()
    const submitGetUser = () => {
        if(!usernameForSearch) return; 
        return getUser(usernameForSearch);
    }
    return (
            <header>
                <S.Wrapper>
                    <input type='text' placeholder="Digite o username para pesquisa..." onChange={(event) => setupUsernameForSearch(event.target.value)} />
                    <button type='submit' onClick={submitGetUser}>
                        <span>Buscar</span>
                    </button>
                </S.Wrapper>
            </header>
    )
}

export default Header