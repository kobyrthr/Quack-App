import './index.css';

const UpdatePassword = () => {
    return(
        <>
    <div class="container">
    <hr></hr>
            <div class="row">
                <div class="columns six">
                    <h5>Reset Password</h5>
                    <label>Current Password</label>
                    <input
                        type="password"    
                        class="current-password"
                        placeholder="Enter Current Password">
                    </input>
                </div>
            </div>
            <div class="row">
                <div class="columns six">
                    <label>New Password</label>
                    <input
                        type="password"    
                        class="new-password"
                        placeholder="Enter New Password">
                    </input>
                </div>
                <div class="columns six">
                    <label>Confirm New Password</label>
                    <input
                        type="password"    
                        class="confirm-new-password"
                        placeholder="Confirm New Password">
                    </input>
                </div>
            </div>

            <br />

            <div class="row">
                <button class="button-secondary">Save Changes</button>
            </div>
            <br />
            <br />
            </div>
            </>
    )
}

export default UpdatePassword;