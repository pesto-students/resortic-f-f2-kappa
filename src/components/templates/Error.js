import React from 'react';
import {Link} from 'react-router-dom';
import { Result } from 'antd';

export default function Error() {
    return (
        <div className="App">
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Link to="/">Return Home</Link>}
            />
        </div>
    )
}
