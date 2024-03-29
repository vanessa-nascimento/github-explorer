interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <span>{props.repository?.name}</span>
            <p>{props.repository?.description}</p>

            <a href={props.repository?.html_url} target="_blank">
                Acessar repositório
            </a>
        </li>
    );
}