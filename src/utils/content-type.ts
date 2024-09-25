export enum ContentType {
  // Tipos de conteúdo de texto
  JSON = "application/json",
  TEXT_PLAIN = "text/plain",
  TEXT_HTML = "text/html",
  TEXT_CSS = "text/css",
  TEXT_JAVASCRIPT = "text/javascript",

  // Tipos de imagem
  IMAGE_PNG = "image/png",
  IMAGE_JPEG = "image/jpeg",
  IMAGE_GIF = "image/gif",
  IMAGE_SVG_XML = "image/svg+xml",
  IMAGE_WEBP = "image/webp",

  // Tipos de vídeo e áudio
  VIDEO_MP4 = "video/mp4",
  VIDEO_WEBM = "video/webm",
  AUDIO_MP3 = "audio/mpeg",
  AUDIO_OGG = "audio/ogg",

  // Tipos de documentos
  APPLICATION_PDF = "application/pdf",
  APPLICATION_XML = "application/xml",
  APPLICATION_ZIP = "application/zip",
  APPLICATION_MSWORD = "application/msword",
  APPLICATION_EXCEL = "application/vnd.ms-excel",
  APPLICATION_POWERPOINT = "application/vnd.ms-powerpoint",

  // Tipos relacionados a arquivos binários ou específicos de sistemas
  APPLICATION_OCTET_STREAM = "application/octet-stream",
  MULTIPART_FORM_DATA = "multipart/form-data",
}
