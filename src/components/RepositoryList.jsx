import { useState, useEffect } from "react";

import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/vanessa-nascimento/repos')
        .then(res => res.json())
        .then(data => setRepositories(data))
    }, []);
        return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map( repo => <RepositoryItem key={repo.id} repository={repo} />)}
            </ul>
        </section>
    )
}