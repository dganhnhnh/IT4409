export const auth = (req, res, next) => {
    console.log(req.session.user);
    if (!req.session.user) {
        return res.status(401).json({
            message: "Bạn cần đăng nhập để thực hiện chức năng này",
        });
    }

    if (req.session.user.role == false) {
        return res.status(403).json({
            message: "Bạn không có quyền thực hiện chức năng này",
        });
    }

    next();
};