import { GetServerSideProps } from 'next';
import { FC } from 'react';
import { User } from 'src/shared/types/user';
import { fetch } from 'src/shared/utils/fetch';

type THomeProps = {
    users: User[];
};

const Home: FC <THomeProps> = ({ users = [] }) => {
    return (
        <div>
            <h1>Home</h1>
            {users.map(({ name, id }) => (
                <div key={id}>
                    <h5>{id}. {name}</h5>
                </div>
            ))}
        </div>
    )
};

export const getServerSideProps: GetServerSideProps<THomeProps> = async (
    ctx,
) => {
    const users = await fetch('/api/v1/users');
    return { props: { users } };
};

export default Home;