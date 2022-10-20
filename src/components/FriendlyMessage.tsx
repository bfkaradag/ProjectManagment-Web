import { useMessage } from '../context/message'
import Button from './Button'
export const FriendlyMessage = () => {
  const message = useMessage()
  const icon = message.friendlyMessage?.status
  if (message.visible)
    return (
      <div>
        <div className="fixed inset-0 ios-bottom w-full z-[50] flex items-center justify-center pointer-events-none">
          <div
            className={`w-[calc(100%-1rem)] text-center relative max-w-[375px] flex flex-col p-4 items-center justify-center  bg-white rounded-3xl border border-brand-gray-border pointer-events-auto`}
          >
            {icon === 'Success' && (
              <div className=" mt-6">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="40" cy="40" r="40" fill="#F3F6FA" />
                  <path
                    d="M52.3586 28.5203C52.6455 28.1897 53.0637 28 53.5034 28C53.8602 27.999 54.205 28.1264 54.4749 28.3575C54.7774 28.6139 54.9644 28.9789 54.9955 29.3722C55.0262 29.7655 54.898 30.1549 54.6387 30.4546L36.6279 51.2733C36.3551 51.587 35.9636 51.7752 35.5465 51.7931H35.4877C35.0897 51.7931 34.7078 51.6363 34.4268 51.3574L25.4214 42.435C24.8526 41.8514 24.8606 40.9239 25.4395 40.3503C26.0184 39.7767 26.9546 39.7687 27.5436 40.3324L35.4027 48.1191L52.3586 28.5203Z"
                    fill="#00BAD3"
                  />
                </svg>
              </div>
            )}
            {icon === 'Error' && (
              <div className=" mt-6">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="40" cy="40" r="40" fill="#F3F6FA" />
                  <path
                    d="M40.0977 25C38.9438 25 38 25.9439 38 27.0977V44.8814C38 46.0352 38.9439 46.9791 40.0977 46.9791C41.2516 46.9791 42.1954 46.0352 42.1954 44.8814V27.0977C42.1954 25.9438 41.2516 25 40.0977 25Z"
                    fill="#F34133"
                  />
                  <path
                    d="M40.0977 50C38.9438 50 38 50.9439 38 52.0977C38 53.2516 38.9439 54.1954 40.0977 54.1954C41.2516 54.1954 42.1954 53.2516 42.1954 52.0977C42.1954 50.8392 41.2516 50 40.0977 50Z"
                    fill="#F34133"
                  />
                </svg>
              </div>
            )}

            <div className="text-lg text-brand-gray-primary mt-6">
              {message.friendlyMessage?.title}
            </div>
            <div className="text-base text-brand-gray-secondary mt-2 whitespace-pre-line">
              {message.friendlyMessage?.message}
            </div>
            {/**/}
            <div className="flex flex-wrap gap-2">
              {message.friendlyMessage?.buttons.map((x) => (
                <div className="mt-6">
                  <Button onClick={x.onClick} type={'button'}>
                    {x.buttonText}
                  </Button>
                </div>
              ))}
            </div>
            <div
              onClick={message.closeModal}
              className="absolute top-4 right-4 cursor-pointer"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L16 16M16 2L2 16"
                  stroke="#333333"
                  strokeWidth="1.35"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          onClick={message.closeModal}
          className="fixed inset-0 z-[49] bg-black/40 "
        ></div>
      </div>
    )
  return null
}
