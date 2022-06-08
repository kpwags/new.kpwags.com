import styled from 'styled-components';

const TagHeaderLine = styled.h1`
    div {
        font-size: 1.1rem;
        font-weight: 300;
    }

    text-transform: uppercase;
    font-size: 2.4rem;
`;

interface TagHeaderProps {
    name: string
}

const TagHeader = ({ name }: TagHeaderProps): JSX.Element => (
    <TagHeaderLine>
        <div>Posts Tagged</div>
        {name}
    </TagHeaderLine>
);

export default TagHeader;
