// const Google_Api_Key=process.env.GOOGLE_API_KEY;

export const YOUTUBE_API=`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2Cstatistics%2Csnippet&chart=mostPopular&maxResults=50&regionCode=US&key=+${import.meta.env.VITE_GOOGLE_API_KEY}`;

export const SEARCH_API = 'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='

export const SEARCH_VIDEOS_API=`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${import.meta.env.VITE_GOOGLE_API_KEY}&q=`;

export const YOUTUBE_VIDEO_WATCH_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${import.meta.env.VITE_GOOGLE_API_KEY}&id=`;