const { model } = require('mongoose')
const { async } = require('q')
const Service = require('../services/Appointment')
var nodemailer = require('nodemailer');
async function createAppointment(req, res)
{
    try {
        console.log(req.body)
        const appointment = await Service.createAppointment({
            user: req.body.user,
            doctor:req.body.doctor,
            node:req.body.node,
            status:req.body.status,
            schedule:req.body.schedule,
            branch:req.body.branch,
            date: req.body.date,
            time: req.body.time,
            assistant:req.body.assistant
        })
        if(!appointment)
        {
            return res.status(400).json({ status: 400, message: "Created not appointment!" }) 
        }
        return res.status(200).json({ status: 200, data: appointment, message: "Create appointment succesfully!" })
    } catch (error) {
        console.log(error)
    }
}

async function updateAppointment(req, res)
{
    try {
        const body = req.body
        console.log(body)
        const appointment = await Service.updateAppointment(req.params.id, body)
        if(!appointment)
        {
            return res.status(400).json({ status: 400,  message: "Updated not successfully!" })
        }

        if(body.status == 1){
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'quocphan20111999@gmail.com',
                  pass: 'dghonokbbetkcinj'
                }
              });
            
              var mailOptions = {
                from: 'quocphan20111999@gmail.com',
                to: body.email,
                subject: 'Doctor Care',
                text: 'Appoointment Success!'
              };
            
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
        }
        else
        {
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'quocphan20111999@gmail.com',
                  pass: 'dghonokbbetkcinj'
                }
              });
            
              var mailOptions = {
                from: 'quocphan20111999@gmail.com',
                to: body.email,
                subject: 'Doctor Care',
                text: 'Appoointment Cancel!'
              };
            
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
        }
        return res.status(200).json({ status: 200, data: appointment, message: "Update appointment successfully!" })
    } catch (error) {
        console.log(error)
    }
}

async function deleteAppointment(req, res)
{
    try {
        const appointment = await Service.deleteAppointment(req.params.id)
        if(!appointment)
        {
            return res.status(400).json({ status: 400, message: "Deleted appointment not successfully!" })
        }
        return res.status(200).json({ status: 200,message: "Delete appointment successfully!" })
    } catch (error) {
        console.log(error)
    }
}

async function getAppointmentAll(req, res)
{
   
    try {
        const appointment = await Service.getAppointmentAll()
        if(!appointment)
        {
            return res.status(402).json({ status: 402, message: "Appointment not exist!" })
        }
        return res.status(200).json({ status: 200,data: appointment })
    } catch (error) {
        console.log(error)
    }

}

async function getAppointmentByUser(req, res)
{

    console.log(req.params.id)
    try {
        const appointment = await Service.getAppointmentByUser(req.params.id)
        if(!appointment)
        {
            return res.status(402).json({ status: 402, message: "Appointment not exist!" })
        }
        return res.status(200).json({ status: 200,data: appointment })
    } catch (error) {
        console.log(error)
    }

}

async function getAppointmentByDoctor(req, res)
{

    console.log(req.params.id)
    try {
        const appointment = await Service.getAppointmentByDoctor(req.params.id)
        if(!appointment)
        {
            return res.status(402).json({ status: 402, message: "Appointment not exist!" })
        }
        return res.status(200).json({ status: 200,data: appointment })
    } catch (error) {
        console.log(error)
    }

}
async function getAppointmentId(req, res)
{
    try {
        const appointment = await Service.getAppointmentId(req.params.id)
        if(!appointment)
        {
            return res.status(402).json({ status: 402, message: "Appointment not exist!" })
        }
        return res.status(200).json({ status: 200,data: appointment })
    } catch (error) {
        console.log(error)
    }
}

async function NotApprovedYet(req, res)
{
    try {
        const appointment = await Service.NotApprovedYet()
        if(!appointment)
        {
            return res.status(402).json({ status: 402, message: "Appointment not exist!" })
        }
        return res.status(200).json({ status: 200,data: appointment })
    } catch (error) {
        console.log(error)
    }
}
async function GetNotApprovedYet(req, res)
{
    try {
        const appointment = await Service.GetNotApprovedYet()
        if(!appointment)
        {
            return res.status(402).json({ status: 402, message: "Appointment not exist!" })
        }
        return res.status(200).json({ status: 200,data: appointment })
    } catch (error) {
        console.log(error)
    }
}

async function SumWaiting(req, res)
{
    try {
        const appointment = await Service.SumWaiting()
        if(!appointment)
        {
            return res.status(402).json({ status: 402, data: 0 })
        }
        return res.status(200).json({ status: 200,data: appointment })
    } catch (error) {
        console.log(error)
    }
}
async function SumApproved(req, res)
{
    try {
        const appointment = await Service.SumApproved()
        if(!appointment)
        {
           return res.status(402).json({ status: 402, data: 0 })
        }
        return res.status(200).json({ status: 200,data: appointment })
    } catch (error) {
        console.log(error)
    }
}
async function SumCancel(req, res)
{
    try {
        const appointment = await Service.SumCancel()
        if(!appointment)
        {
            return res.status(402).json({  data: 0 })
        }
        return res.status(200).json({ status: 200,data: appointment })
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    createAppointment,
    updateAppointment,
    deleteAppointment,
    getAppointmentAll,
    getAppointmentId,
    NotApprovedYet,
    GetNotApprovedYet,
    getAppointmentByUser,
    SumApproved,
    SumWaiting,
    SumCancel,
    getAppointmentByDoctor
}
