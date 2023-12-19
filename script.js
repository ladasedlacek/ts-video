const tipsport_player = () => {
    const get_body = document.body
    const get_video = document.querySelector('.fp-player')
    get_body.insertBefore(get_video, get_body.firstChild)

    const wrapper_styles = {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        zIndex: 99999
    }
    Object.assign(get_video.style, wrapper_styles)
    const set_video = get_video.querySelector('video')
    set_video.style.width = '100%'
}
tipsport_player()