export default function Section3() {
  return (
    <>
      <section className=" container px-10 relative py-20 lg:py-20">
        <div className="grid grid-cols-3 gap-20">
          <div>
            <video
              autoPlay
              muted
              src="https://res.cloudinary.com/db1i46uiv/video/upload/v1719531002/Copy_of_Blue_Print_for_webpage_1_f4h0jo.mp4"
            ></video>
          </div>
          <div>
            <video
              autoPlay
              muted
              src="https://res.cloudinary.com/db1i46uiv/video/upload/v1719531223/Copy_of_Blue_Print_for_webpage_3_ty1vxv.mp4"
            ></video>
          </div>
          <div>
            <video
              autoPlay
              muted
              src="https://res.cloudinary.com/db1i46uiv/video/upload/v1719530943/Copy_of_Blue_Print_for_webpage_qbmmrv.mp4"
            ></video>
          </div>
        </div>
      </section>
      <section className="w-full relative py-20 lg:py-20">
        <img
        className="w-full"
          src="https://res.cloudinary.com/db1i46uiv/image/upload/v1719531879/Copy_of_Blue_Print_for_webpage_1366_x_440_px_fkqvjy.png"
          alt=""
        />
      </section>
    </>
  );
}
