import React, { Component } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

export class AddInfoToast extends Component {
    static displayName = AddInfoToast.name;

    render() {
        return (
                <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                    <Toast>
                        <ToastHeader>
                           Reactstrap
                       </ToastHeader>
                       <ToastBody>
                           This is a toast on a gridded background — check it out!
                        </ToastBody>
                    </Toast>
                </div>
        );
    }
}
