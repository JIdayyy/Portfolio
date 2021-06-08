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
  id?: number;
  title?: string;
  content?: string;
  Pictures?: Array<Picture>;
  createdAt?: string;
}

interface Picture {
  pictureUrl: string;
}
