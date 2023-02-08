var baseUrl = "http://42.192.200.234:8080"
// var baseUrl = "http://localhost:8090"
var token = localStorage.getItem("token");

function responseError(data) {
    console.log(data);
    if (data) {
        if (data.status == 0) {
            $.notify({
                message: '服务器或网络错误',
            }, {
                type: 'danger',
                placement: {
                    from: 'top',
                    align: 'right'
                },
                z_index: 10800,
                delay: 1500,
                animate: {
                    enter: 'animate__animated animate__shakeX',
                    exit: 'animate__animated animate__fadeOutDown'
                }
            });
        } else if (data.status == 401) {
            window.location.href = '../login/login.html';
        } else if (data.status == 404) {
            $.notify({
                message: '未找到资源',
            }, {
                type: 'danger',
                placement: {
                    from: 'top',
                    align: 'right'
                },
                z_index: 10800,
                delay: 1500,
                animate: {
                    enter: 'animate__animated animate__shakeX',
                    exit: 'animate__animated animate__fadeOutDown'
                }
            });
        } else if (data.status == 500) {
            $.notify({
                message: data.responseJSON.msg,
            }, {
                type: 'danger',
                placement: {
                    from: 'top',
                    align: 'right'
                },
                z_index: 10800,
                delay: 1500,
                animate: {
                    enter: 'animate__animated animate__shakeX',
                    exit: 'animate__animated animate__fadeOutDown'
                }
            });
        }
    }
}

function removeToken() {
    localStorage.removeItem("token");
}