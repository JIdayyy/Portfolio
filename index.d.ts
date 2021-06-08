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
  id?: number | null;
  title?: string | null;
  content?: string | null;
  Pictures?: Array<Picture> | null;
  createdAt?: string | null;
}

interface Picture {
  pictureUrl: string;
}
