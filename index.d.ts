interface IProps {
  isScroll?: boolean;
  name?: string;
  page?: String;
  children?: React.ReactNode;
}

interface IEvent {
  e?: Event;
  deltaY?: any;
}



interface IProject {
  title: string,
  content: string,
  Pictures: Array<Picture>,
  createdAt: Date,
}
interface Picture {
   pictureUrl: string
}