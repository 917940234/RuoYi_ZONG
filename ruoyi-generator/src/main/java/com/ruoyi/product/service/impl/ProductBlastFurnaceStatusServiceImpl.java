package com.ruoyi.product.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ruoyi.product.mapper.ProductBlastFurnaceStatusMapper;
import com.ruoyi.product.domain.ProductBlastFurnaceStatus;
import com.ruoyi.product.service.IProductBlastFurnaceStatusService;
import com.ruoyi.common.core.text.Convert;

/**
 * 铁水包状态Service业务层处理
 * 
 * @author zongyoucheng
 * @date 2022-11-24
 */
@Service
public class ProductBlastFurnaceStatusServiceImpl implements IProductBlastFurnaceStatusService 
{
    @Autowired
    private ProductBlastFurnaceStatusMapper productBlastFurnaceStatusMapper;

    /**
     * 查询铁水包状态
     * 
     * @param blastFurnaceStatusId 铁水包状态主键
     * @return 铁水包状态
     */
    @Override
    public ProductBlastFurnaceStatus selectProductBlastFurnaceStatusByBlastFurnaceStatusId(Long blastFurnaceStatusId)
    {
        return productBlastFurnaceStatusMapper.selectProductBlastFurnaceStatusByBlastFurnaceStatusId(blastFurnaceStatusId);
    }

    /**
     * 查询铁水包状态列表
     * 
     * @param productBlastFurnaceStatus 铁水包状态
     * @return 铁水包状态
     */
    @Override
    public List<ProductBlastFurnaceStatus> selectProductBlastFurnaceStatusList(ProductBlastFurnaceStatus productBlastFurnaceStatus)
    {
        return productBlastFurnaceStatusMapper.selectProductBlastFurnaceStatusList(productBlastFurnaceStatus);
    }

    /**
     * 新增铁水包状态
     * 
     * @param productBlastFurnaceStatus 铁水包状态
     * @return 结果
     */
    @Override
    public int insertProductBlastFurnaceStatus(ProductBlastFurnaceStatus productBlastFurnaceStatus)
    {
        return productBlastFurnaceStatusMapper.insertProductBlastFurnaceStatus(productBlastFurnaceStatus);
    }

    /**
     * 修改铁水包状态
     * 
     * @param productBlastFurnaceStatus 铁水包状态
     * @return 结果
     */
    @Override
    public int updateProductBlastFurnaceStatus(ProductBlastFurnaceStatus productBlastFurnaceStatus)
    {
        return productBlastFurnaceStatusMapper.updateProductBlastFurnaceStatus(productBlastFurnaceStatus);
    }

    /**
     * 批量删除铁水包状态
     * 
     * @param blastFurnaceStatusIds 需要删除的铁水包状态主键
     * @return 结果
     */
    @Override
    public int deleteProductBlastFurnaceStatusByBlastFurnaceStatusIds(String blastFurnaceStatusIds)
    {
        return productBlastFurnaceStatusMapper.deleteProductBlastFurnaceStatusByBlastFurnaceStatusIds(Convert.toStrArray(blastFurnaceStatusIds));
    }

    /**
     * 删除铁水包状态信息
     * 
     * @param blastFurnaceStatusId 铁水包状态主键
     * @return 结果
     */
    @Override
    public int deleteProductBlastFurnaceStatusByBlastFurnaceStatusId(Long blastFurnaceStatusId)
    {
        return productBlastFurnaceStatusMapper.deleteProductBlastFurnaceStatusByBlastFurnaceStatusId(blastFurnaceStatusId);
    }
}
