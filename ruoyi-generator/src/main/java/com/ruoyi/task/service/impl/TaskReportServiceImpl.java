package com.ruoyi.task.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ruoyi.task.mapper.TaskReportMapper;
import com.ruoyi.task.domain.TaskReport;
import com.ruoyi.task.service.ITaskReportService;
import com.ruoyi.common.core.text.Convert;

/**
 * 报告系统Service业务层处理
 * 
 * @author zongyoucheng
 * @date 2022-09-22
 */
@Service
public class TaskReportServiceImpl implements ITaskReportService 
{
    @Autowired
    private TaskReportMapper taskReportMapper;

    /**
     * 查询报告系统
     * 
     * @param reportId 报告系统主键
     * @return 报告系统
     */
    @Override
    public TaskReport selectTaskReportByReportId(Long reportId)
    {
        return taskReportMapper.selectTaskReportByReportId(reportId);
    }

    /**
     * 查询报告系统列表
     * 
     * @param taskReport 报告系统
     * @return 报告系统
     */
    @Override
    public List<TaskReport> selectTaskReportList(TaskReport taskReport)
    {
        return taskReportMapper.selectTaskReportList(taskReport);
    }

    /**
     * 新增报告系统
     * 
     * @param taskReport 报告系统
     * @return 结果
     */
    @Override
    public int insertTaskReport(TaskReport taskReport)
    {
        return taskReportMapper.insertTaskReport(taskReport);
    }

    /**
     * 修改报告系统
     * 
     * @param taskReport 报告系统
     * @return 结果
     */
    @Override
    public int updateTaskReport(TaskReport taskReport)
    {
        return taskReportMapper.updateTaskReport(taskReport);
    }

    /**
     * 批量删除报告系统
     * 
     * @param reportIds 需要删除的报告系统主键
     * @return 结果
     */
    @Override
    public int deleteTaskReportByReportIds(String reportIds)
    {
        return taskReportMapper.deleteTaskReportByReportIds(Convert.toStrArray(reportIds));
    }

    /**
     * 删除报告系统信息
     * 
     * @param reportId 报告系统主键
     * @return 结果
     */
    @Override
    public int deleteTaskReportByReportId(Long reportId)
    {
        return taskReportMapper.deleteTaskReportByReportId(reportId);
    }
}
