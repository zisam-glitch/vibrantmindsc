export default function Pagination({
    prev,
    currentPage,
    getPaginationGroup,
    next,
    pages,
    handleActive,
}) {
    return (
        <div>
            <nav className="flex items-center gap-2">
                {getPaginationGroup.length > 0 && (
                    // <a onClick={prev}>
                    //     {currentPage !== 1 && <i className="fa fa-arrow-left" />}
                    // </a>
                    <>
                        {currentPage !== 1 &&
                            <a onClick={prev} className="text-neutral-950 rounded-full w-12 h-12 bg-primary-light-200 hover:bg-primary-light-300 dark:bg-primary-dark-200 dark:hover:bg-primary-dark-300 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={15} viewBox="0 0 18 15" className="fill-neutral-950 dark:fill-neutral-dark-950">
                                    <path d="M17.4922 7.49023C17.4922 8.19336 16.9453 8.74023 16.2812 8.74023H4.28906L8.39062 12.8809C8.89844 13.3496 8.89844 14.1699 8.39062 14.6387C8.15625 14.873 7.84375 14.9902 7.53125 14.9902C7.17969 14.9902 6.86719 14.873 6.63281 14.6387L0.382812 8.38867C-0.125 7.91992 -0.125 7.09961 0.382812 6.63086L6.63281 0.380859C7.10156 -0.126953 7.92188 -0.126953 8.39062 0.380859C8.89844 0.849609 8.89844 1.66992 8.39062 2.13867L4.28906 6.24023H16.2812C16.9453 6.24023 17.4922 6.82617 17.4922 7.49023Z" />
                                </svg>
                            </a>
                        }
                    </>
                )}

                {getPaginationGroup.map((item, index) => (
                    // <a
                    //     onClick={() => handleActive(item)}
                    //     key={index}
                    //     className={currentPage === item ? "page-item active" : "page-item"}
                    // >
                    //     {item}
                    // </a>
                    <a onClick={() => handleActive(item)} key={index} className={`${currentPage === item ? "active text-xl font-bold text-neutral-950 bg-primary-light-950 dark:text-neutral-dark-950 dark:bg-primary-dark-950 rounded-full w-12 h-12 flex items-center justify-center" : ""} text-xl font-bold text-neutral-950 rounded-full bg-primary-light-200 hover:bg-primary-light-300 dark:text-neutral-dark-950 dark:bg-primary-dark-200 dark:hover:bg-primary-dark-300 w-12 h-12 flex items-center justify-center`}>{item}</a>
                ))}

                {getPaginationGroup.length > 0 && (
                    // <a onClick={next} className="next_a page-item">
                    //     {currentPage < pages && <i className="fa fa-arrow-right" />}
                    // </a>
                    <>
                        {currentPage < pages &&
                            <a onClick={next} className="text-neutral-950 rounded-full w-12 h-12 bg-primary-light-200 hover:bg-primary-light-300 dark:bg-primary-dark-200 dark:hover:bg-primary-dark-300 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={15} viewBox="0 0 18 15" className="fill-neutral-950 dark:fill-neutral-dark-950">
                                    <path d="M0 7.49023C0 8.19336 0.546875 8.74023 1.21094 8.74023H13.2031L9.10156 12.8809C8.59375 13.3496 8.59375 14.1699 9.10156 14.6387C9.33594 14.873 9.64844 14.9902 9.96094 14.9902C10.3125 14.9902 10.625 14.873 10.8594 14.6387L17.1094 8.38867C17.6172 7.91992 17.6172 7.09961 17.1094 6.63086L10.8594 0.380859C10.3906 -0.126953 9.57031 -0.126953 9.10156 0.380859C8.59375 0.849609 8.59375 1.66992 9.10156 2.13867L13.2031 6.24023H1.21094C0.546875 6.24023 0 6.82617 0 7.49023Z" />
                                </svg>
                            </a>
                        }
                    </>
                )}
            </nav>
        </div>
    )
}
