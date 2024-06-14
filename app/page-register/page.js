
import Layout from "@/components/layout/Layout"
export default async function Register() {
    return (
        <>
            <Layout>
                <section className="relative py-12 lg:pt-32">
                    <div className="container px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="mr-12 lg:pl-12">
                                <span className="h-12 px-7 py-3.5 bg-neutral-0 dark:bg-neutral-dark-0 rounded-3xl border border-neutral-300 dark:border-neutral-dark-300 text-neutral-700 dark:text-neutral-dark-700 text-base font-bold leading-none mb-4 inline-block">
                                    Sign Up
                                </span>
                                <h3 className="heading-3 mb-2">Create <span className="font-light">an Account</span></h3>
                                <p className="text-neutral-700 dark:text-neutral-dark-700 mb-16 font-medium text-2xl">Create a new
                                    account and enjoy premium content</p>
                                <form >
                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div className="form-group">
                                            <label htmlFor="last-name" className="input-label">First Name</label>
                                            <input type="text" placeholder="First name" className="input-lg" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="last-name" className="input-label">Last Name</label>
                                            <input type="text" placeholder="Last name" className="input-lg" />
                                        </div>
                                    </div>
                                    <div className="form-group mb-4">
                                        <label htmlFor="email" className="input-label">Email</label>
                                        <input type="email" placeholder="Email" className="input-lg" />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label htmlFor="password" className="input-label">Password</label>
                                        <input type="password" placeholder="Password" className="input-lg" />
                                    </div>
                                    <div className="form-group flex justify-between mb-4 mt-6">
                                        <div className="flex items-center mb-8">
                                            <input type="checkbox" id="save-info" className="w-4 h-4 accent-primary-light-950  bg-primary-light-950 text-neutral-0  rounded cursor-pointer mr-2" />
                                            <label htmlFor="save-info" className="text-sm text-neutral-950 dark:text-neutral-dark-950">I
                                                agree to the <a href="#" className="font-bold">Terms &amp; conditions</a></label>
                                        </div>
                                        <a href="#" className="text-neutral-950 dark:text-neutral-dark-950 underline text-sm">Need
                                            help?</a>
                                    </div>
                                    <button type="submit" className="w-full btn bg-primary-light-950 dark:bg-primary-dark-950 rounded-full px-8 py-4 text-xl text-neutral-950 dark:text-neutral-dark-950 font-bold text-center">
                                        Sign Up
                                    </button>
                                    <p className="text-center text-lg font-medium text-neutral-700 dark:text-neutral-dark-700 pt-12 pb-4">
                                        Or continue with</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <button className="h-[58px] px-4 gap-2 rounded-lg flex justify-center items-center border border-neutral-300 dark:border-neutral-dark-300 cursor-pointer hover-up hover:bg-primary-light-200 text-base font-bold text-neutral-950 dark:text-neutral-dark-950">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                                                <path d="M31.1985 12.9643H29.95V12.9H16V19.1H24.7598C23.4818 22.7092 20.0478 25.3 16 25.3C10.8641 25.3 6.7 21.1359 6.7 16C6.7 10.8641 10.8641 6.7 16 6.7C18.3707 6.7 20.5275 7.59435 22.1698 9.05522L26.5539 4.67105C23.7856 2.09107 20.0827 0.5 16 0.5C7.44012 0.5 0.5 7.44012 0.5 16C0.5 24.5599 7.44012 31.5 16 31.5C24.5599 31.5 31.5 24.5599 31.5 16C31.5 14.9607 31.393 13.9462 31.1985 12.9643Z" fill="#FFC107" />
                                                <path d="M2.28711 8.78553L7.37963 12.5203C8.75758 9.1087 12.0947 6.7 16 6.7C18.3707 6.7 20.5275 7.59435 22.1697 9.05523L26.5539 4.67105C23.7856 2.09108 20.0827 0.5 16 0.5C10.0464 0.5 4.88336 3.86118 2.28711 8.78553Z" fill="#FF3D00" />
                                                <path d="M16 31.4988C20.0037 31.4988 23.6415 29.9666 26.392 27.475L21.5948 23.4155C19.9863 24.6388 18.0208 25.3004 16 25.2988C11.9685 25.2988 8.54532 22.7281 7.25572 19.1406L2.20117 23.035C4.76642 28.0547 9.97597 31.4988 16 31.4988Z" fill="#4CAF50" />
                                                <path d="M31.1985 12.9628H29.95V12.8984H16V19.0984H24.7598C24.1485 20.8162 23.0474 22.3171 21.5924 23.416L21.5947 23.4144L26.392 27.4739C26.0525 27.7823 31.5 23.7484 31.5 15.9984C31.5 14.9592 31.393 13.9447 31.1985 12.9628Z" fill="#1976D2" />
                                            </svg>
                                            Sign up with Google
                                        </button>
                                        <button className="h-[58px] px-4 gap-2 rounded-lg flex justify-center items-center border border-neutral-300 dark:border-neutral-dark-300 cursor-pointer hover-up hover:bg-primary-light-200 text-base font-bold text-neutral-950 dark:text-neutral-dark-950">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={23} height={30} viewBox="0 0 23 30" className="fill-neutral-950 dark:fill-neutral-dark-950">
                                                <path d="M22.7122 21.0883C22.9901 21.2914 23.0802 21.6632 22.923 21.9661C20.3931 26.9225 18.3749 29.3912 16.531 29.3912C15.6724 29.3912 14.8291 29.119 14.0068 28.59C13.4167 28.2111 12.7333 28.0027 12.0321 27.9878C11.331 27.9729 10.6393 28.1521 10.0336 28.5057C9.03697 29.0902 8.08823 29.3912 7.18741 29.3912C4.47536 29.3912 0 21.2128 0 16.726C0 11.9344 2.56638 8.28125 6.46867 8.28125C8.30481 8.28125 9.88988 8.54575 11.2219 9.08432C11.7854 9.31049 12.4237 9.29515 12.9738 9.03641C14.0547 8.52658 15.4807 8.28125 17.2479 8.28125C19.4079 8.28125 21.292 9.3354 22.856 11.3766C22.9125 11.4502 22.9538 11.5345 22.9772 11.6243C23.0006 11.7141 23.0058 11.8077 22.9924 11.8996C22.979 11.9915 22.9473 12.0797 22.8992 12.1591C22.851 12.2385 22.7875 12.3074 22.7122 12.3618C20.9662 13.6459 20.1247 15.0853 20.1247 16.726C20.1247 18.3647 20.9662 19.806 22.7122 21.0883Z" fill="black" />
                                                <path d="M12.2187 6.24253C12.1254 6.24354 12.0327 6.22615 11.946 6.19134C11.8594 6.15654 11.7804 6.10501 11.7137 6.03969C11.6469 5.97437 11.5937 5.89655 11.5571 5.81066C11.5204 5.72477 11.501 5.6325 11.5 5.53912C11.5 2.81749 13.754 0.613346 16.5293 0.613346C16.6227 0.61208 16.7155 0.629298 16.8023 0.66401C16.889 0.698722 16.9681 0.750243 17.0349 0.815612C17.1017 0.88098 17.1549 0.958906 17.1915 1.04491C17.228 1.13091 17.2473 1.2233 17.248 1.31675C17.248 4.03839 14.996 6.24253 12.2187 6.24253Z" fill="black" />
                                                <path d="M12.2186 6.24253C12.1252 6.24354 12.0325 6.22615 11.9459 6.19134C11.8592 6.15654 11.7803 6.10501 11.7135 6.03969C11.6468 5.97437 11.5936 5.89655 11.5569 5.81066C11.5202 5.72477 11.5009 5.6325 11.4999 5.53912C11.4999 2.81749 13.7538 0.613346 16.5291 0.613346C16.6226 0.61208 16.7154 0.629298 16.8021 0.66401C16.8889 0.698722 16.968 0.750243 17.0347 0.815612C17.1015 0.88098 17.1548 0.958906 17.1913 1.04491C17.2279 1.13091 17.2471 1.2233 17.2479 1.31675C17.2479 4.03839 14.9958 6.24253 12.2186 6.24253ZM22.7122 21.0601C22.9901 21.2633 23.0802 21.6351 22.923 21.9379C20.3931 26.8944 18.3749 29.363 16.531 29.363C15.6724 29.363 14.8291 29.0908 14.0068 28.5618C13.4167 28.1829 12.7333 27.9745 12.0321 27.9597C11.331 27.9448 10.6393 28.124 10.0336 28.4775C9.03697 29.0621 8.08823 29.363 7.18741 29.363C4.47536 29.363 0 21.1847 0 16.6978C0 11.9062 2.56638 8.25308 6.46867 8.25308C8.30481 8.25308 9.88988 8.51758 11.2219 9.05616C11.7854 9.28232 12.4237 9.26699 12.9738 9.00824C14.0547 8.49841 15.4807 8.25308 17.2479 8.25308C19.4079 8.25308 21.292 9.30724 22.856 11.3485C22.9125 11.4221 22.9538 11.5063 22.9772 11.5961C23.0006 11.6859 23.0058 11.7796 22.9924 11.8714C22.979 11.9633 22.9473 12.0515 22.8992 12.1309C22.851 12.2103 22.7875 12.2792 22.7122 12.3336C20.9662 13.6178 20.1247 15.0572 20.1247 16.6978C20.1247 18.3365 20.9662 19.7779 22.7122 21.0601Z" />
                                            </svg>
                                            Sign up with Apple ID
                                        </button>
                                    </div>
                                    <p className="text-center text-lg font-medium text-neutral-700 dark:text-neutral-dark-700 pt-8 pb-12">
                                        Already have an account? <a href="page-login.html" className="text-neutral-950 dark:text-neutral-dark-950 underline">Sign In</a></p>
                                </form>
                            </div> {/*Left col*/}
                            <div className="lg:pl-12 hidden lg:block">
                                <div className="w-full md:max-w-[565px] rounded-[26px] bg-gradient-to-t from-primary-light-950 via-primary-light-300 to-primary-light-200 p-2">
                                    <img className="rounded-3xl md:max-w-[550px]" src="assets/imgs/pages/img-31.png" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
