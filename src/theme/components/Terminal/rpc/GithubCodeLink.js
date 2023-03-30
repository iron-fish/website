import React from "react"

export default function GithubCodeLink({link}) {
    return (
        <a href={`https://github.com/iron-fish/ironfish/blob/master/ironfish/src/rpc/routes/${link}.ts`} target="_blank">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github" width={30} height = {30}/>
        </a>
    )
}
