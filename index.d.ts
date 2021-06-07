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
