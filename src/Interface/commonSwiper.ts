//轮播图

export interface Result {
  data: {
    records: object[];
  };
}

export interface ImgArr {
  item: object[] | ImgObj[];
}

export interface ImgObj {
  picUrl: string;
  jumpLink: string;
  title?: string;
}
